import React from 'react';
import { Head } from '../common/components';

const Book = props => <img className="book-cover" src={ "/bookcovers/" +  props.coverImage } />;

export default props => <main className="book-covers">
  <Head
    title="Books"
  />

  <Book title='One Hundred Years of Solitude' coverImage='one-hundred-years-of-solitude.jpeg' />
  <Book title="Ender's Game" coverImage='ender.jpg' />
  <Book title='White Fang' coverImage='white-fang.jpg' />
  <Book title='Around the World in 80 Days' coverImage='around-the-world-in-80-days.jpg' />
  <Book title='Breakfast of Champions' coverImage='breakfast-of-champions.jpg' />
  <Book title='Dr. Jekyll and Mr. Hyde' coverImage='dr-jekyll-and-mr-hyde.jpg' />
  <Book title='The Importance of Being Ernest' coverImage='importance-of-being-earnest.jpg' />
  <Book title='Dracula' coverImage='dracula-2.jpg' />
  <Book title='The Book Thief' coverImage='the-book-thief.jpg' />
  <Book title='Tuesdays with Morrie' coverImage='tuesdays-with-morrie.jpg' />
  <Book title='What Happy People Know' coverImage='what-happy-people-know.jpg' />
  <Book title='Water for Elephants' coverImage='water-for-elephants.jpg' />
  <Book title='Shadow of the Wind' coverImage='shadow-of-the-wind.jpg' />
  <Book title='Gone Girl' coverImage='gone-girl.jpg' />
  <Book title='Call of the Wild' coverImage='The_Call_of_the_Wild.jpg' />
  <Book title='Heart of Darkness' coverImage='heart-of-darkness.jpg' />
  <Book title='Gulliver’s Travels' coverImage='gullivers_travels.jpg' />
  <Book title='A Song of Ice and Fire series' coverImage='A_Song_of_Ice_and_Fire.jpg' />
  <Book title='The Hobbit' coverImage='the-hobbit.jpg' />
  <Book title='Lord of the Rings' coverImage='lord_of_the_rings.jpg' />
  <Book title='The Lion, the Witch, and the Wardrobe' coverImage='LionWardrobe13.jpg' />
  <Book title='The Hunger Games series' coverImage='the-hunger-games-trilogy.jpg' />
  <Book title='Sherlock Holmes' coverImage='sherlock-holmes.jpg' />
  <Book title='Siddhartha' coverImage='siddhartha.jpeg' />
  <Book title='Demian' coverImage='demian.jpg' />
  <Book title='The Hitchhiker’s Guide to the Galaxy series' coverImage='HHGG-Complete.jpg' />
  <Book title='Neuromancer' coverImage='neuromancer.jpg' />
  <Book title='Everything is Illuminated' coverImage='Everything-is-Illuminated.jpg' />
  <Book title='The Fault in Our Stars' coverImage='The_Fault_in_Our_Stars.jpg' />
  <Book title='The Count of Monte Cristo' coverImage='count-of-monte-cristo.jpg' />
  <Book title='The Grapes of Wrath' coverImage='grapes-of-wrath.jpg' />
  <Book title='Cannery Row' coverImage='cannery-row.jpg' />
  <Book title='Sweet Tuesday' coverImage='sweet-thursday.jpg' />
  <Book title='The Road' coverImage='the-road.jpg' />
  <Book title='The Curious Incident of the Dog in the Nighttime' coverImage='curious-incident.jpg' />
  <Book title='The Catcher in the Rye' coverImage='Catcher-in-the-rye.jpg' />
  <Book title='Angels and Demons' coverImage='AngelsAndDemons.jpg' />
  <Book title='Howl and other poems' coverImage='Howl-Cover.jpg' />
  <Book title='One Flew Over the Cuckcoo’s Nest' coverImage='one-flew-over.jpg' />
  <Book title='Brave New World' coverImage='Brave-New-World.jpg' />
  <Book title='Romeo and Juliet' coverImage='romeo-and-juliet.jpg' />
  <Book title='To Kill a Mockingbird' coverImage='to-kill-a-mocking-bird.jpg' />
  <Book title='Dante’s Inferno' coverImage='inferno.jpg' />
  <Book title='The Great Gatsby' coverImage='gatsby-original-cover-art.jpg' />
  <Book title='Into the Wild' coverImage='into-the-wild.jpg' />
</main>;
