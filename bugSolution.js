function handleData(snapshot) {
  try {
    const data = snapshot.val();
    //Check for expected data types before processing
    if (typeof data.name === 'string' && typeof data.age === 'number' && Array.isArray(data.scores)) {
      console.log('Data received successfully:', data);
      //Process the data
    } else {
      console.error('Data type mismatch. Expected: { name: string, age: number, scores: array }. Received:', data);
      //Handle the mismatch appropriately, e.g., display an error message or use default values
    }
  } catch (error) {
    console.error('Error retrieving or processing data:', error);
  }
} 