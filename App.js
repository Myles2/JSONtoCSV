import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CSVLink, CSVDownload } from "react-csv";

const loadData = require("./sample.json");
let comp = JSON.stringify([loadData]);
const obj = JSON.parse(comp);

let csvData = Object.values(obj[0]["001"]["Final_Schedule"]);
let hold = []
for (let each in csvData) {
  hold.push(Object.values(csvData[each]))
  hold[each].unshift(parseInt(each)+1)
}
console.log(hold)
let names = Object.keys(obj[0]["001"]["Final_Schedule"]["01"]);
names.unshift("Days")

console.log(csvData[0])
const Log = ({ value, replacer = null, space = 2 }) => (
  <pre>
    <code>{JSON.stringify(value, replacer, space)}</code>
  </pre>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Log value={loadData}/>
      <CSVLink data={hold} headers={names} filename={"Final_Schedule.csv"} className="btn btn-primary">Download me</CSVLink>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
