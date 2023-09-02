import styled from 'styled-components';

export const OnlineChip = styled.span({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: ({ $isOnline }) => ($isOnline ? 'green' : 'red'),
});

export const Username = styled.p({
  fontWeight: '600',
});
