import React, { useState } from "react";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";

export default function App() {
  // 選択エリア
  const [areaSelect, setAreaSelect] = useState("");
  // 今日・明日・明後日の天気
  const [kyoWeather, setKyoWeather] = useState("");
  const [asuWeather, setAauWeather] = useState("");
  const [asatWeather, setAsatWeather] = useState("");

  const onChangeArea = (event) => {
    setAreaSelect(event.target.value);
  };

  const onClickSearch = () => {
    // 気象庁の天気予報APIのURL
    const api_url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${areaSelect}.json`;
    //APIからJSONデータを取得する
    fetch(api_url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // JSONをパース
        const json_str = JSON.stringify(result);
        const json = JSON.parse(json_str)[0];
        // 天気情報を取得
        const weathers = json.timeSeries[0].areas[0].weathers;
        // 今日,明日,明後日の天気予報を変数に設定
        const [kyo, asu, asatte] = weathers;
        // stateに設定
        setKyoWeather(kyo);
        setAauWeather(asu);
        setAsatWeather(asatte);
      });
  };

  return (
    <>
      <h1>天気予報検索</h1>
      <Search onClick={onClickSearch} onChange={onChangeArea} />
      <hr />
      <Weather title="今日の天気" weather={kyoWeather} />
      <Weather title="明日の天気" weather={asuWeather} />
      <Weather title="明後日の天気" weather={asatWeather} />
    </>
  );
}
