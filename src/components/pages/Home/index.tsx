import BookList from './BookList';
import Home from './Home.ui';

const Index = () => <Home  List={{ children: <BookList /> }} />;

export default Index;
