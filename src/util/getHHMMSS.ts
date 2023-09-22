export function getDateFormatted(): string {
    const dataAtual = new Date();
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0');
  
    return `${horas}H_${minutos}M_${segundos}S`;
  }