import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const Information = (props) => {
    const style = {
        backgroundColor: 'white',
        ':hover': {
            color: 'white',
            backgroundColor: 'black'
        }
      }
    return (
        <div className="InfoSection" style={ style }>
        <p> { props.name} U.S. President Barack Hussein Obama II was born in Honolulu, Hawaii. His mother, Stanley Ann Dunham, was a white American from Wichita, Kansas. His father, Barack Obama Sr., who was black, was from Alego, Kenya. They were both young college students at the University of Hawaii. When his father left for Harvard, his mother and Barack stayed behind, and his father ultimately returned alone to Kenya, where he worked as a government economist. Barack's mother remarried an Indonesian oil manager and moved to Jakarta when Barack was six. He later recounted Indonesia as simultaneously lush and a harrowing exposure to tropical poverty. He returned to Hawaii, where he was brought up largely by his grandparents. The family lived in a small apartment - his grandfather was a furniture salesman and an unsuccessful insurance agent and his grandmother worked in a bank - but Barack managed to get into Punahou School, Hawaii's top prep academy. His father wrote to him regularly but, though he traveled around the world on official business for Kenya, he visited only once, when Barack was ten. Obama attended Columbia University, but found New York's racial tension inescapable. He became a community organizer for a small Chicago church-based group for three years, helping poor South Side residents cope with a wave of plant closings. He then attended Harvard Law School, and in 1990 became the first African-American editor of the Harvard Law Review. He turned down a prestigious judicial clerkship, choosing instead to practice civil-rights law back in Chicago, representing victims of housing and employment discrimination and working on voting-rights legislation. He also began teaching at the University of Chicago Law School, and married Michelle Robinson (now Michelle Obama, a fellow attorney; their daughters are Sasha Obama and Malia Obama. Eventually, he was elected to the Illinois state senate, where his district included both Hyde Park and some of the poorest ghettos on the South Side. In 2004, Obama was elected to the U.S. Senate as a Democrat, representing Illinois, and he gained national attention by giving a rousing and well-received keynote speech at the Democratic National Convention in Boston. In 2008 he ran for President, and despite having only four years of national political experience, he won. In January 2009, he was sworn in as the 44th President of the United States, and the first African-American ever elected to that position. Obama was re-elected to a second term in November 2012.</p>
        </div>
    );
}

Information.propTypes = {
    name: PropTypes.string
  };


export default Radium(Information)