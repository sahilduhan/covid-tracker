import React, { useEffect, useState } from 'react'

function Covid() {


  // const [load] = useState(null)

  const [data,setData] = useState([]);

  const getCovidData = async()=>{
    try{
      const data = await fetch('https://data.covid19india.org/data.json')
      const actualData = await data.json()
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    getCovidData();
  },[])


  return (

      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>03</h2> */}
              <h3>Active Cases</h3>
              <h3>{data.active}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
              {/* <a href="*">Read More</a> */}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>03</h2> */}
              <h3>Confirmed Cases</h3>
              <h3>{data.confirmed}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
              {/* <a href="*">Read More</a> */}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>03</h2> */}
              <h3>Recovered Cases</h3>
              <h3>{data.recovered}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
              {/* <a href="*">Read More</a> */}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>03</h2> */}
              <h3>Total Deaths</h3>
              <h3>{data.deaths}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
              {/* <a href="*">Read More</a> */}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>03</h2> */}
              <h3>Delta Variant Cases</h3>
              <h3>{data.deltaconfirmed}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
              {/* <a href="*">Read More</a> */}
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>03</h2> */}
              <h3>Delta Variant Recovered</h3>
              <h3>{data.deltarecovered}</h3>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
              {/* <a href="*">Read More</a> */}
            </div>
          </div>
        </div>
  </div>
  )
}

export default Covid