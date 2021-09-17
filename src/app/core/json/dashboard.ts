import * as _ from 'lodash';

export const dashboard = {
    intradayDatatableSetting: {
        table: {},
        options: {
            ajax: {
                url: "https://priceapi.moneycontrol.com/techCharts/techChartController/history?symbol=9&resolution=15&from=1631688963&to=1631782069",
                method: "GET",
                cache: false,
                timeout: 0,
                headers: {},
                dataSrc: function (json) {
                    const data = [];
                    const { c, h, l, o, s, t, v } = json;
                    for (const i in c) {
                        if (c[i]) {
                            const d = {
                                open: o[i],
                                high: h[i],
                                low: l[i],
                                close: c[i],
                                volume: v[i],
                                time: t[i],
                            }
                            data.push(d);
                        }
                    }

                    // const data = _.get(json, 'fno_list.item', []);
                    return data;
                }
            },
            pageLength: 10,
            order: [[1, "asc"]],
            processing: true,
            columns: [
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
        table: {},
        options: {
            ajax: {
                url: "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=CE&id=NIFTY&ExpiryDate=2021-09-16",
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
            order: [[1, "asc"]],
            processing: true,
            columns: [
                { "data": "fno_exp", "title": "fno_exp" },
                { "data": "strikeprice", "title": "strikeprice" },
                { "data": "lastvalue", "title": "lastvalue" },
                { "data": "percentchange", "title": "percentchange" },
                { "data": "direction", "title": "direction" },
                { "data": "oi_change", "title": "oi_change" },
                { "data": "oi_percchg", "title": "oi_percchg" },
                { "data": "last_traded_date", "title": "last_traded_date" },
                { "data": "volume", "title": "volume" }
            ]
        }

    },
    putDatatableSetting: {
        table: {},
        options: {
            ajax: {
                url: "https://appfeeds.moneycontrol.com/jsonapi/fno/overview&format=json&inst_type=options&option_type=CE&id=NIFTY&ExpiryDate=2021-09-16",
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
            order: [[1, "asc"]],
            processing: true,
            columns: [
                { "data": "fno_exp", "title": "fno_exp" },
                { "data": "strikeprice", "title": "strikeprice" },
                { "data": "lastvalue", "title": "lastvalue" },
                { "data": "percentchange", "title": "percentchange" },
                { "data": "direction", "title": "direction" },
                { "data": "oi_change", "title": "oi_change" },
                { "data": "oi_percchg", "title": "oi_percchg" },
                { "data": "last_traded_date", "title": "last_traded_date" },
                { "data": "volume", "title": "volume" }
            ]
        }
    }

}