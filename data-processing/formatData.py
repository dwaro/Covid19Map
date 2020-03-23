import pandas as pandas
import datetime

totaldf = pandas.read_csv("https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_19-covid-Confirmed.csv&filename=time_series_2019-ncov-Confirmed.csv")
recoveredf = pandas.read_csv("https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_19-covid-Recovered.csv&filename=time_series_2019-ncov-Recovered.csv")
deathsdf = pandas.read_csv("https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_19-covid-Deaths.csv&filename=time_series_2019-ncov-Deaths.csv")

countries = {}
numCols = len(totaldf.columns)

def countVals(lst):
    lst = lst[4:]
    return lst[-1]

globalCount = 0
globalWeek = [0,0,0,0,0]
BigCountries = {}
for index, row in totaldf.iterrows():
    total = countVals(totaldf.loc[index])
    globalCount += total
    globalWeek[0] = row[-5]
    globalWeek[1] = row[-4]
    globalWeek[2] = row[-3]
    globalWeek[3] = row[-2]
    globalWeek[4] = row[-1]
    if (row["Province/State"] != row["Province/State"] or row["Province/State"] == row["Country/Region"]):
        location = {"name": row["Country/Region"], "lat":row["Lat"], "lon": row["Long"], "country": row["Country/Region"], "total": total, "recovered": -1, "deaths": -1, "totaldata": row[numCols-5:]}
        countries[row["Country/Region"]] = location
    else:
        c = row["Country/Region"]
        if c in BigCountries:
            BigCountries[c]["total"] += total
            BigCountries[c]["totaldata"][0] += row[-5]
            BigCountries[c]["totaldata"][1] += row[-4]
            BigCountries[c]["totaldata"][2] += row[-3]
            BigCountries[c]["totaldata"][3] += row[-2]
            BigCountries[c]["totaldata"][4] += row[-1]
        else:
            BigCountries[c] = {"total": total, "totaldata": row[numCols-5:], "recovered": -1, "deaths":  -1}

        location = {"name": row["Province/State"] + " (" + row["Country/Region"] + ")", "lat":row["Lat"], "lon": row["Long"], "country": row["Country/Region"], "total": total, "recovered": -1, "deaths": -1, "totaldata": row[numCols-5:]}
        countries[row["Province/State"]] = location

globalRecoveries = 0
for index, row in recoveredf.iterrows():
    recoveries = countVals(recoveredf.loc[index])
    globalRecoveries += recoveries
    if (row["Province/State"] != row["Province/State"]):
        countries[row["Country/Region"]]["recovered"] = recoveries
        countries[row["Country/Region"]]["recoveredData"] = row[numCols-5:]
    else:
        c = row["Country/Region"]
        if "ounty" in row["Province/State"]:
            c = 'US'
        if BigCountries[c]["recovered"] == -1:
            BigCountries[c]["recovered"] = recoveries
        else:
            BigCountries[c]["recovered"] += recoveries
        countries[row["Province/State"]]["recovered"] = recoveries
        countries[row["Province/State"]]["recoveredData"] = row[numCols-5:]

globalDeaths = 0
for index, row in deathsdf.iterrows():
    deaths = countVals(deathsdf.loc[index])
    globalDeaths += deaths
    if (row["Province/State"] != row["Province/State"]):
        countries[row["Country/Region"]]["deaths"] = deaths
        countries[row["Country/Region"]]["deathsData"] = row[numCols-5:]
    else:
        c = row["Country/Region"]
        if BigCountries[c]["deaths"] == -1:
            BigCountries[c]["deaths"] = deaths
        else:
            BigCountries[c]["deaths"] += deaths
        countries[row["Province/State"]]["deaths"] = deaths
        countries[row["Province/State"]]["deathsData"] = row[numCols-5:]

formatted = []
for c in countries:
    formatted.append(countries[c])
for c in BigCountries:
    BigCountries[c]["name"] = c
    if c not in countries:
        BigCountries[c]["country"] = c
    else:
        BigCountries[c]["country"] = "-"
    BigCountries[c]["lat"] = 0
    BigCountries[c]["lon"] = 0
    BigCountries[c]["recoveredData"] = [-1,-1,-1,-1,-1]
    BigCountries[c]["deathsData"] = [-1,-1,-1,-1,-1]
    if c not in countries:
        formatted.append(BigCountries[c])
formatted.append({"name": "Global", "lat":0, "lon":0, "country":"", "total": globalCount, "recovered": globalRecoveries, "deaths": globalDeaths, "totaldata": globalWeek})

newdf = pandas.DataFrame(formatted)
newdf = newdf.sort_values(by ='total', ascending=False )

cols = ['total']
newdf[cols] = newdf[newdf[cols] > 0][cols]
newdf = newdf.dropna(subset=["total"])
pandas.options.display.float_format = '{:,.0f}'.format

cleandf = newdf[newdf["name"] == newdf["country"]]

cleandf.to_json(r'../client/src/data/cases.js', orient="records")
with open('../client/src/data/cases.js', 'r') as original: data = original.read()
with open('../client/src/data/cases.js', 'w') as modified: modified.write("module.exports = " + data)

newdf.to_json(r'../client/src/data/fullData.js', orient="records")
with open('../client/src/data/fullData.js', 'r') as original: data = original.read()
with open('../client/src/data/fullData.js', 'w') as modified: modified.write("module.exports = " + data)

currentDT = datetime.datetime.now()
summary = 'module.exports = {Total:' + str(globalCount) + ', Recoveries:' + str(globalRecoveries) +', Deaths:' + str(globalDeaths)+ ', Time:"' + str(currentDT) + ' (CST)"}'
text_file = open('../client/src/data/summary.js', "w")
text_file.write(summary)
text_file.close()
