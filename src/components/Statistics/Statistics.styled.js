import styled from 'styled-components';

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

export const StatisticsSection = styled.section({
  backgroundColor: '#fff',
  boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)',
  borderRadius: '8px',
});
export const StatisticsTitle = styled.h2({
  textAlign: 'center',
  margin: '32px 0',
});
export const StatisticsList = styled.ul({
  display: 'flex',
});
export const StatisticsListItem = styled.li({
  width: 50,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  backgroundColor: () => getRandomColor(),
});
