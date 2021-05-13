import '../App.css';

export default function Table({ index }) {
  return (
    <table>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
          <th>Obesidade (Grau)</th>
        </tr>
      </thead>
      <tbody>
        <tr id="1" className={index === 1 ? 'backgroundColorTable' : ''}>
          <td>MENOR QUE 18,5</td>
          <td>MAGREZA</td>
          <td>0</td>
        </tr>
        <tr id="2" className={index === 2 ? 'backgroundColorTable' : ''}>
          <td>ENTRE 18,5 E 24,9</td>
          <td>NORMAL</td>
          <td>0</td>
        </tr>
        <tr id="3" className={index === 3 ? 'backgroundColorTable' : ''}>
          <td>ENTRE 25,0 E 29,9</td>
          <td>SOBREPESO</td>
          <td>I</td>
        </tr>
        <tr id="4" className={index === 4 ? 'backgroundColorTable' : ''}>
          <td>ENTRE 30,0 E 39,9</td>
          <td>OBESIDADE</td>
          <td>II</td>
        </tr>
        <tr id="5" className={index === 5 ? 'backgroundColorTable' : ''}>
          <td>MAIOR QUE 40,0</td>
          <td>OBESIDADE GRAVE</td>
          <td>III</td>
        </tr>
      </tbody>
    </table>
  );
}
