import React, {useState, useEffect} from 'react';

function Fib() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const resValues = await fetch('/api/values/current');
        const dataValues = await resValues.json();

        setValues(dataValues);
        console.log('values', dataValues)

      } catch (error) {
        console.log('error on current fetch => ', error)
      }

      try {
        const resSeenIndexes = await fetch('/api/values/all');
        const dataSeenIndexes = await resSeenIndexes.json();

        setSeenIndexes(dataSeenIndexes);
        console.log('seen indexes', dataSeenIndexes)

      } catch (error) {
        console.log('error indexes fetch => ', error)
      }
    }
    fetchData();
  }, [index])

  const renderSeenIndexes = () => {
    seenIndexes.map(({ number }) => number).join(', ');
  }

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} i calculated {values[key]}
        </div>
      )
    }

    return entries;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/values', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index: index })
    });

    setIndex('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="digit">enter your index:</label>
        <input
          type="text"
          name="digit"
          value={index}
          onChange={e => setIndex(e.target.value)}
        />
        <button>submit</button>
      </form>
      <h3>Indices I have seen:</h3>
      {renderSeenIndexes()}
      <h3>Calculated values:</h3>
      {renderValues()}

    </div>
  )
}

export default Fib;
