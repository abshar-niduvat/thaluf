const fetchListItem = async () => {
    try {
      const response = await fetch(
        'http://universities.hipolabs.com/search?country=United%20Arab%20Emirates'
      );
      const result = await response.json();
      localStorage.setItem('universities', JSON.stringify(result));
      return result;
    } catch (error) {
      throw new Error('Failed to fetch the data');
    }
  };
  
  const getData = () => {
    const data = localStorage.getItem('universities');
    return data ? JSON.parse(data) : null;
  };

 
  
  export { fetchListItem, getData };