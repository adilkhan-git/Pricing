interface IProps {
  views: number;
}

function NumberOfPage(props: IProps) {
  return <p>{props.views}K PAGEVIEWS</p>;
}

export default NumberOfPage;
