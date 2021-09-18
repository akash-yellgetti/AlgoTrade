import * as _ from 'lodash';

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return {
        date,
        month,
        year,
        hour,
        min,
        sec,
        time,
        self: a,
    };
  }

export const dashboard = {
    intradayDatatableSetting: {
        id: "intradayDatatable",
        table: {},
        options: {
            responsive: true,
            ajax: {
                url: "https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol=9&resolution=15&from=1631763900&to=1631872800",
                method: "GET",
                cache: false,
                timeout: 0,
                headers: {},
                dataSrc: function (json) {
                    const data = [];
                    const { c, h, l, o, s, t, v } = json;
                    for (const i in c) {
                        if (c[i]) {
                            const timestamp= timeConverter(t[i]);
                            const d = {
                                open: o[i],
                                high: h[i],
                                low: l[i],
                                close: c[i],
                                volume: v[i],
                                time: timestamp.time,
                                datetime: timestamp.self.getTime(),
                                dateTime: timestamp.hour+""+timestamp.min
                            }
                            console.log(timestamp.time, t[i]);
                            
                            data.push(d);
                        }
                    }

                    // const data = _.get(json, 'fno_list.item', []);
                    return data;
                }
            },
            pageLength: 10,
            processing: true,
            columns: [
                { "data": "datetime", "title": "datetime" },
                { "data": "time", "title": "time" },
                { "data": "open", "title": "open" },
                { "data": "high", "title": "high" },
                { "data": "low", "title": "low" },
                { "data": "close", "title": "close" },
                { "data": "volume", "title": "volume" }
            ]
        }

    },
    callDatatableSetting: {
        id: "callDatatable",
        table: {},
        options: {
            responsive: true,
            ajax: {
                url: "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=CE&id=NIFTY&ExpiryDate=2021-09-23",
                method: "GET",
                cache: false,
                timeout: 0,
                headers: {},
                dataSrc: function (json) {
                    const data = _.get(json, 'fno_list.item');
                    return data;
                }
            },
            pageLength: 10,
            processing: true,
            columns: [
                // { "data": "fno_exp", "title": "fno_exp" },
                { "data": "strikeprice", "title": "strikeprice" },
                { "data": "lastvalue", "title": "lastvalue" },
                { "data": "percentchange", "title": "percentchange" },
                { "data": "direction", "title": "direction" },
                { "data": "oi_change", "title": "oi_change" },
                { "data": "oi_percchg", "title": "oi_percchg" },
                // { "data": "last_traded_date", "title": "last_traded_date" },
                { "data": "volume", "title": "volume" }
            ]
        }

    },
    putDatatableSetting: {
        id: "putDatatable",
        table: {},
        options: {
            responsive: true,
            ajax: {
                url: "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=PE&id=NIFTY&ExpiryDate=2021-09-23",
                method: "GET",
                cache: false,
                timeout: 0,
                headers: {},
                dataSrc: function (json) {
                    const data = _.get(json, 'fno_list.item');
                    return data;
                }
            },
            pageLength: 10,
            processing: true,
            columns: [
                // { "data": "fno_exp", "title": "fno_exp" },
                { "data": "strikeprice", "title": "strikeprice" },
                { "data": "lastvalue", "title": "lastvalue" },
                { "data": "percentchange", "title": "percentchange" },
                { "data": "direction", "title": "direction" },
                { "data": "oi_change", "title": "oi_change" },
                { "data": "oi_percchg", "title": "oi_percchg" },
                // { "data": "last_traded_date", "title": "last_traded_date" },
                { "data": "volume", "title": "volume" }
            ]
        }

    }

}