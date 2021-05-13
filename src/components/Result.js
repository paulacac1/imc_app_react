import '../App.css';

export default function Result({ resultValue }) {
  const formatter = Intl.NumberFormat('pt-BR');

  return (
    <div>
      <div
        className={resultValue > 0 ? 'visibleTrue' : 'visibleFalse'}
        id="label_result"
      >
        Seu IMC é:<span>{formatter.format(resultValue)} </span>
      </div>
    </div>
  );
}
