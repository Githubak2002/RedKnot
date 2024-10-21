export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// ===== 
export const meetings = [
  {
    title: "Town Hall Meeting",
    time: "8:30 PM",
    date: "10/25/2024",
    address: "123 Main St, Jersey City 07024",
  },
  {
    title: "Community Gathering",
    time: "6:00 PM",
    date: "11/01/2024",
    address: "456 Elm St, Jersey City 07024",
  },
  {
    title: "Neighborhood Watch",
    time: "7:00 PM",
    date: "11/05/2024",
    address: "789 Maple St, Jersey City 07024",
  },
  {
    title: "School Board Meeting",
    time: "5:30 PM",
    date: "11/10/2024",
    address: "321 Oak St, Jersey City 07024",
  },
  {
    title: "Library Fundraiser",
    time: "4:00 PM",
    date: "11/15/2024",
    address: "654 Pine St, Jersey City 07024",
  },
  {
    title: "City Council Meeting",
    time: "6:30 PM",
    date: "11/20/2024",
    address: "987 Birch St, Jersey City 07024",
  },
];


