import styled from 'styled-components';
import { Text } from 'react-native'

export const Container = styled.View`
  padding: 20px;
  height: 100%;
  margin-bottom: 30px;
`;
export const StatsView = styled.View`
  justify-content: space-between;
  padding: 0px 10px;
  flex-direction: row;
  margin-vertical: 5px;
`;
export const StatsText = styled.Text`
  flex: 1;
  font-size: 15px;
  padding-horizontal: 10px;
  font-family: LemonadaRegular;
`;
export const DescriptionView = styled(StatsView)`
  flex-direction: column;
`;
export const TabTextStandard = styled(Text)`
  font-family: LemonadaRegular;
  color: ${({color}) => color ? color : 'white'};
`;
export const TabTextHeader = styled(TabTextStandard)`
  font-size: 22px;
  color: ${({color}) => color ? color : 'white'};
`;
export const TabTextDescription = styled(TabTextStandard)`
  font-family: LemonadaLight;
  font-size: 12px;
  color: ${({color}) => color ? color : 'white'};
`;
export const TabTextMoves = styled(TabTextStandard)`
  font-size: 10px;
`;