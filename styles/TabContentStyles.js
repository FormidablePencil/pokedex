import styled from 'styled-components';

export const Container = styled.View`
`;
export const StatsView = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
`;
export const StatsText = styled.Text`
  flex: 1;
  font-size: 20px;
  padding-horizontal: 10px;
`;
export const DescriptionView = styled(StatsView)`
  flex-direction: column;
`;