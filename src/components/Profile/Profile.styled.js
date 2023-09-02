import styled from 'styled-components';

export const Card = styled.div({
  backgroundColor: '#fff',
  width: '300px',
  boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.5)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Description = styled.div({
  padding: '30px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
});

export const UserName = styled.p({
  lineHeight: '140%',
  fontWeight: '700',
});
export const UserTag = styled.p({
  color: '#8b857e',
});
export const UserLocation = styled.p({
  color: '#8b857e',
});

export const ProfileImg = styled.img({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
});

export const Stats = styled.ul({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const StatsItem = styled.li({
  borderTop: '1px solid gray',
  padding: '10px',
  width: '33%',
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
});

export const StatLabel = styled.span({
  color: '#99918f',
  fontWeight: '300',
});
export const StatQuantity = styled.span({
  fontWeight: '700',
});
