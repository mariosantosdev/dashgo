import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Header } from "~components/Header";
import { Sidebar } from "~components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-16T00:00:00.000Z",
      "2022-03-17T00:00:00.000Z",
      "2022-03-18T00:00:00.000Z",
      "2022-03-19T00:00:00.000Z",
      "2022-03-20T00:00:00.000Z",
      "2022-03-21T00:00:00.000Z",
      "2022-03-22T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series-1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>DashGO</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex=start"
        >
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text>Inscrições Semanais</Text>
            <Chart options={options} series={series} typ="area" height={160} />
          </Box>
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text>Taxa de Abertura</Text>
            <Chart options={options} series={series} typ="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
