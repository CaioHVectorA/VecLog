export function getDateFormatted(mode: 'HH/MM' | 'HH/MM/SS'): string {
  if (mode ==='HH/MM/SS') {
    const dataAtual = new Date();
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0'); 
    return `${horas}H_${minutos}M_${segundos}S`;
  } else {
    const dataAtual = new Date();
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    return `${horas}H_${minutos}M`;
  }
  }

  // export function getDayFormated(): string {
  //   const dataAtual = new Date();
  //   const dia = String(dataAtual.getDate()).padStart(2, '0');
  //   const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  //   return `${dia}D_${mes}MO`;
  // }