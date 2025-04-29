function TestList({ teli }) {
  return <h2>Test List {teli}</h2>;
}

export default function Test() {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(<TestList key={i} teli={i} />);
  }
  return list;
}
