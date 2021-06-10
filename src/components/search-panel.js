const SearchPanel = () => {
  const plaseHolder = '|-_search_-|';
  const inputStyle = {
    fontSize: '33px'
  }
  return <input placeholder={plaseHolder} style={inputStyle}></input>;
};

export default SearchPanel;