import React from 'react';
import { useStyles } from './SearchBar.styles';
import SearchIcon from './SearchIcon';
import { useAppContext } from '../../context/context';

const SearchBar = () => {
  const classes = useStyles();
  const [textInputOpen, setTextInputOpen] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<string>('');
  const { setData } = useAppContext();

  const searchDataByTitle = (value: string) => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then((response) => response.json())
      .then((json) =>
        json.filter((item: { title: string }) =>
          item.title?.toLowerCase().includes(value.toLowerCase())
        )
      )
      .then((it) => setData(it))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleChange = (value: string) => {
    setInput(value);
    searchDataByTitle(value);
  };

  return (
    <div className={classes.root}>
      <div className={textInputOpen ? classes.inputContainer : classes.opacity}>
        <input
          type="text"
          placeholder="Search ..."
          className={classes.inputContent}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <button
        className={classes.buttonStyle}
        onClick={() => {
          setTextInputOpen(!textInputOpen);
        }}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
