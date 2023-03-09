interface IProps {
  rate: number;
  period: string;
}

function Rate(props: IProps) {
  return (
    <p>
      ${props.rate}/{props.period}
    </p>
  );
}

export default Rate;
