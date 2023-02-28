import { fetchDataForAllYears } from '../../../utils/api/fetch'

export default async (req, res) => {
  const { username, format } = req.query;
  const data = await fetchDataForAllYears(username, format);
  // ------------ THIS RETURNS JUST THIS YEAR'S CONTRIBUTIONS ------------ vv
  // let currData = {...data, contributions:await data.contributions.filter((contribution) => {
  //   return contribution.date.slice(0, 4) == '2023'
  // })}
  // console.log(currData)
  // ------------ THIS RETURNS JUST THIS YEAR'S CONTRIBUTIONS ------------ ^^
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.json(data);
}
