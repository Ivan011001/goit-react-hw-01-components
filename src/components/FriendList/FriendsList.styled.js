import styled from 'styled-components';

export const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  width: 300,
});

export const ListItem = styled.li({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)',
  borderRadius: 8,
  padding: '16px 8px',
  backgroundColor: '#fff',
});
