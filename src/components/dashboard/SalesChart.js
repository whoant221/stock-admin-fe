import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect, useState } from 'react';
import admin from "../../api/admin";
import moment from "moment";

const SalesChart = () => {
  const [chart, setChart] = useState();

  useEffect(() => {
    const getChartAdin = async() => {
      try{
        const data = await admin.getChart()
        setChart(data.data.reports)
      }
      catch(err){
        alert(err)
      }
    }
    getChartAdin()
  }, []);

  const arrVolumeAsk = []
  const arrVolumeBid = []
  const arrDay = []

  if(chart){
    chart.map((items) => {
      arrVolumeAsk.push(items.total_ask_volume)
      arrVolumeBid.push(items.total_bid_volume)
      //'MM/DD/YYYY'
      arrDay.push(moment(items.day).utc().format('MM/DD'))
    })
  }

  const chartoptions = {
    series: [
      {
        name: "Khối lượng mua",
        data: arrVolumeBid,
      },
      {
        name: "Khối lượng bán",
        data: arrVolumeAsk,
      },
    ],
    options: {
      chart: { type: "area" },
      dataLabels: { enabled: false },
      grid: { strokeDashArray: 3 },
      stroke: { curve: "smooth", width: 1 },
      xaxis: { categories: arrDay },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Thống kê khối lượng mua bán</CardTitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
