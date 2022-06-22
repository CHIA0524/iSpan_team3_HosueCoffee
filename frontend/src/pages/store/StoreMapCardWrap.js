import React from 'react'
import { useState, useEffect, useParams } from 'react'
import { useLocation } from 'react-router-dom'

// component
import StoreCardWrap from './StoreCardWrap'
import StoreCardSearch from './StoreCardSearch'
import StoreMap from './StoreMap'

// CSS
import './Style_WebMap.scss'
import './Style_MobileMap.scss'
import { MdKeyboardArrowRight } from "react-icons/md";


function StoreMapCardWrap(props){

  let getURL = useLocation();
  console.log(getURL);
  console.log(getURL.search);


  // 載入指示器用
  const [ isLoading, setIsLoading ] = useState(false)

  // 儲存資料庫資料
  const [ data, setData ] = useState([])
  const [ filterData, setFilterData ] = useState([])
  const [ cityData, setCityData ] = useState([])
  const [ serveData, setServeData ] = useState([])

  // 錯誤訊息用
  const [ error, setError ] = useState('')

  // map 使用
  const [ center, setCenter ] = useState({
    lat: 24.9725821,
    lng: 121.5297745,
  });
  const [ originPosition, setOriginPosition ] = useState({})
  const [ destinations, setDestinations ] = useState([])
  const [ distance, setDistance ] = useState({})
  const [ zoom, setZoom ] = useState()
  const [ markerInfoCSS, setMarkerInfoCSS ] = useState('-150px')
  const [ control, setControl ] = useState(false)

  // 側欄使用
  const [ asideCSS, setAsideCSS ] = useState('0px')
  const [ iconRotate, setIconRotate ] = useState('rotate(0deg)')
  // 開啟詳細選單(透過StoreCard傳送className)
  const [ cardDetailCss, setCardDetailCss ] = useState()
  const [ filterCSS, setFilterCSS ] = useState(false)

  // 過濾出 '縣市' 及 '服務' 列表
  const filterCity = (results) => {
    let filterResults = []
    for (let i = 0; i < results.length; i++) {
      if (filterResults.indexOf(results[i].city) === -1) {
        filterResults.push(results[i].city)
      }
    }
    setCityData([...filterResults])
  }
  
  // 向遠端伺服器get資料
  const fetchServeData = async(keyword) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/store/getServeList`)
      const results = await response.json()
      if (Array.isArray(results)) {
        const propertyValue = Object.values(results).map(item => item.serve_name);
        setServeData(propertyValue)
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
    }
  }

  // 向遠端伺服器get資料
  const fetchData = async (keyword) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/store`)
      const results = await response.json()

      // console.log(results);
      
      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
        filterCity(results)
      }
      
      const API_KEY = process.env.REACT_APP_GMAP_API_KEY
      const LANGUAGE = "zh-Tw"
      const REGION = "TW"
      const GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json"

      // 檢查地址資料是否有經緯度
      for (let i = 0; i < results.length; i++) {

        if (results[i].lat === null || results[i].lng === null || results[i].lat === '' || results[i].lng === '') {

          let address = results[i].city + results[i].area + results[i].address

          let url = `${GOOGLE_API}?address=${encodeURIComponent(address)}&key=${API_KEY}&language=${LANGUAGE}&region=${encodeURIComponent(REGION)}`

          const GEOresponse = await fetch(url).catch(() =>
            Promise.reject(new Error("Error fetching data"))
          );

          const GEOresults = await GEOresponse.json().catch(() => {
            console.log("Error parsing server response")
            return Promise.reject(new Error("Error parsing server response"));
          })

          if (GEOresults.status === "OK") {
            // console.log(GEOresults)
            const updateLatLng = await fetch(
              `${process.env.REACT_APP_API_URL}/store/${results[i].id}/${GEOresults.results[0].geometry.location.lat}/${GEOresults.results[0].geometry.location.lng}`,
              {method: "PUT"})
            // console.log(await updateLanLng.json())
          }

          console.log(
            `${GEOresults.error_message}.\nServer returned status code ${GEOresults.status}`,
            true
          )
          
          
          // 載入資料後設定到狀態中
          // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
          
          const response2 = await fetch(`${process.env.REACT_APP_API_URL}/store`)
          const results2 = await response2.json()
          if (Array.isArray(results2)) {
            setData(results2)
            console.log(results2);
          }
        }
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
    }
  }

  // 向遠端伺服器get資料 (過濾)
  const fetchFilterData = async (keyword) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/store/` + keyword
      )

      const results = await response.json()

      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
      }

    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
      console.log(error);
    }
  }

  const spinner = (
    <div className='storeSpinner'>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  useEffect(() => {
    // 使用者定位
    if(navigator.geolocation) {

      // 使用者不提供權限，或是發生其它錯誤
      function error() {
        // setTimeout(() => {
        //   alert('無法取得你的位置');
        // }, 1500)
      }

      // 使用者允許抓目前位置，回傳經緯度
      function success(position) {
        setOriginPosition({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude)})
        setCenter({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude)})
        setControl(true)  
      }

      // 跟使用者拿所在位置的權限
      navigator.geolocation.getCurrentPosition(success, error);

    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }

    // 組成 latlng 陣列
    if (data.length > 0){
      let newDestinations = []
      for (let i = 0; i < data.length; i++) {
        let oneLanLng = {}
        oneLanLng.lat = Number(data[i].lat)
        oneLanLng.lng = Number(data[i].lng)
        newDestinations.push(oneLanLng)
      }
      setDestinations(newDestinations);
    }
  }, [data])

  useEffect(() => {
    setIsLoading(true)
    // 向伺服器要求get資料
    fetchServeData()
    if (getURL.search) {
      let keyword = (getURL.search).replace('?store_name=', '')
      fetchFilterData(keyword)
    } else {
      fetchData()
    }
  }, [])
  
  // 自動於x秒後關掉指示動畫
  useEffect(() => {
    // 如果是true(有呈現的情況)
    if (isLoading) {
      // 關起載入指示動畫(延後1.5秒關閉)
      setTimeout(() => {
        setIsLoading(false)
        setZoom(18)
      }, 1500)
    }
  }, [isLoading])

  // 監測視窗寬度
  useEffect(()=>{ 
    window.addEventListener('resize',() => {
      setIconRotate('rotate(0deg)')
      if (window.innerWidth <= 500) {
        setAsideCSS('-300px')
      } else {
        setAsideCSS('-375px')
      }
    });
  },[]);

  useEffect(() => {
    if (distance) {
      setTimeout(() => {
        for (let i = 0; i < data.length; i++) {
          data[i].distance = distance.rows[0].elements[i].distance.text
          data[i].distanceValue = distance.rows[0].elements[i].distance.value
        }
        const sortData = data.sort(function(a, b){
        return a.distanceValue - b.distanceValue
        })
        setFilterData(sortData)
      }, 100)
    }
  }, [data, distance])

  return(
    <>
      <div className="mapAndCardWrap">
        <div className='asideCardSearch' style={{left: asideCSS}}>

          {/* 搜尋框 */}
          <StoreCardSearch
            data={data}
            setFilterData={setFilterData}
            cityData={cityData}
            serveData={serveData}
            setIsLoading={setIsLoading}
            fetchFilterData={fetchFilterData}
            setMarkerInfoCSS={setMarkerInfoCSS}
            setCardDetailCss={setCardDetailCss}
            filterCSS={filterCSS}
            setFilterCSS={setFilterCSS}
          />
          
          {/* 門市卡片 */}
          {isLoading ? spinner :
            <StoreCardWrap
              data={filterData}
              setCenter={setCenter}
              setZoom={setZoom}
              setMarkerInfoCSS={setMarkerInfoCSS}
              cardDetailCss={cardDetailCss}
              setCardDetailCss={setCardDetailCss}
              setFilterCSS={setFilterCSS}
              distance={distance}
            />
          }
          <div
            className='storeOpenAside coffeeLightBtn'
            onClick={()=>{
              if (asideCSS === '0px') {
                // console.log(window.innerWidth);
                if (window.innerWidth <= 500) {
                  setAsideCSS('-300px')
                } else {
                  setAsideCSS('-375px')
                }
                setIconRotate('rotate(0deg)')
              } else {
                setAsideCSS('0px')
                setIconRotate('rotate(180deg)')
              }
            }}
          >
            <MdKeyboardArrowRight size={30} style={{transform: iconRotate, transition: 'all .5s'}}/>

          </div>

        </div>


        <StoreMap
          data={filterData}
          center={center}
          zoom={zoom}
          setCenter={setCenter}
          setZoom={setZoom}
          markerInfoCSS={markerInfoCSS}
          setMarkerInfoCSS={setMarkerInfoCSS}
          asideCSS={asideCSS}
          setAsideCSS={setAsideCSS}
          setIconRotate={setIconRotate}
          originPosition={originPosition}
          setFilterCSS={setFilterCSS}
          destinations={destinations}
          setDistance={setDistance}
          control={control}
          setControl={setControl}
        />
      </div>
    </>
  );
}

export default StoreMapCardWrap