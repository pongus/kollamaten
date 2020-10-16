import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import withStyles from 'react-jss';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Content from '../Content';
import BackButton from '../BackButton';
import Input from '../Input';
import Title from '../Title';

const styles = (theme) => ({
  item: {
    borderBottom: [1, 'solid', theme.color.gray],
    '& p': {
      marginTop: 0,
      marginBottom: 0,
      textDecoration: 'none',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
  empty: {
    maxWidth: 225,
    margin: [0, 'auto'],
    textAlign: 'center',
    '& h1': {
      marginTop: theme.space.large,
    },
  },
  link: {
    display: 'block',
    padding: [15, 20],
    backgroundColor: theme.color.light,
    color: theme.color.dark,
    textDecoration: 'none',
    '&:active': {
      backgroundColor: theme.color.gray,
    },
  },
  highlight: {
    backgroundColor: theme.color.blueLight,
    fontWeight: 'bold',
  },
});

const ListRoute = ({ classes, establishments }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredItems, setFilteredItems] = useState(establishments);

  const isMatch = (needle, haystack) =>
    haystack.toUpperCase().includes(needle.toUpperCase().trim());

  const highlightMatch = (listItem) => {
    const item = listItem.trim();
    const term = searchTerm.trim();

    if (item.length && term.length) {
      // Find start and end positions
      const fragments = [];
      const startIndex = item.toUpperCase().indexOf(term.toUpperCase());
      const endIndex = startIndex + term.length;

      // Split on matched positions
      fragments.push(item.slice(0, startIndex));
      fragments.push(item.slice(startIndex, endIndex));
      fragments.push(item.slice(endIndex));

      return fragments
        .filter((fragment) => fragment !== '')
        .map((fragment, index) => {
          const isHighlight = term.toUpperCase() === fragment.toUpperCase();

          return (
            <span
              key={item + index}
              className={isHighlight ? classes.highlight : null}
            >
              {fragment}
            </span>
          );
        });
    }

    return item;
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value;

    setSearchTerm(searchTerm);

    setFilteredItems(
      establishments.filter(
        (item) =>
          isMatch(searchTerm, item.id) ||
          isMatch(searchTerm, item.name) ||
          isMatch(searchTerm, item.city)
      )
    );
  };

  const handleReset = () => setSearchTerm('');

  const renderList = () => {
    const items = searchTerm.length ? filteredItems : establishments;

    return (
      <ul>
        {searchTerm.length && !items.length
          ? renderEmpty()
          : items.map((item) => renderItem(item))}
      </ul>
    );
  };

  const renderItem = (item) => (
    <li key={item.id} className={classes.item}>
      <Link to={`/SE/${item.id}`} className={classes.link}>
        {renderText(item)}
      </Link>
    </li>
  );

  const renderEmpty = () => (
    <li className={classes.empty}>
      <Title text="Ooops!" />
      <p>Vi kunde tyvärr inte hitta något som matchar...</p>
      <p>Försök igen!</p>
    </li>
  );

  const renderText = (item) => {
    if (isMatch(searchTerm, item.id)) {
      return (
        <>
          <p>{highlightMatch(item.id)}</p>
          <p>{`${item.name}, ${item.city}`}</p>
        </>
      );
    } else if (isMatch(searchTerm, item.name)) {
      return (
        <>
          <p>{item.id}</p>
          <p>
            {highlightMatch(item.name)}
            {`, ${item.city}`}
          </p>
        </>
      );
    } else if (isMatch(searchTerm, item.city)) {
      return (
        <>
          <p>{item.id}</p>
          <p>
            {`${item.name}, `}
            {highlightMatch(item.city)}
          </p>
        </>
      );
    } else {
      return false;
    }
  };

  return (
    <>
      <Helmet title="Kolla maten | Lista" />

      <Header>
        <BackButton />
        <Input
          value={searchTerm}
          onChange={handleChange}
          onReset={handleReset}
        />
      </Header>

      <Content hasMargins={false} hasMaxWidth={false}>
        {renderList()}
      </Content>
    </>
  );
};

ListRoute.propTypes = {
  establishments: arrayOf(
    shape({
      address: string,
      associatedActivities: string,
      category: string,
      city: string,
      competentAuthority: string,
      id: string,
      name: string,
      species: string,
      state: string,
    })
  ),
};

ListRoute.defaultProps = {
  establishments: [],
};

export default withStyles(styles)(ListRoute);
