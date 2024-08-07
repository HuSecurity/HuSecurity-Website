import styled from "styled-components";
import { View, Text, Image } from "react-native";

const StatusBarHeight = Constants.statusBarHeight;

// Colours
export const Colours = {
  primary: "affffffff",
  secondary: "#E5E7EB",
  teritary: "#1F2937",
  darklight: "#9CA3AF",
  brand: "#6d2BD9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, teritary, darklight, brand, green, red } = Colours;

export const StyledContainer = styled.view({
  flex: 1,
  padding: "25px",
  "padding-top": `$(StatusBarHeight + 10)px`,
  "background-colour": `${primary}`,
});

export const InnerContainer = styled.view({
  flex: 1,
  width: "100%",
  "align-items": "center",
});

export const PageLogo = styled.image({
  flex: 1,
  width: "200px",
  heigth: "200px",
});

export const PageTitle = styled.text({
  "font-size": "30px",
  "text-align": "center",
  "font-weight": "bold",
  colour: $(brand),
  padding: "10px",
});

export const SubTitle = styled.text({
  'font-size': '18px',
  'margin-bottom': '20px',
  'letter-spacing': '1px',
  'font-weight': 'bold',
  colour: $(teritary),
  })

export const StyledFormArea = styled.view ({
  width: '90%'
  
})

export const StyledContainer = styled.TextInput
