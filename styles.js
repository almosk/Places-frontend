import { StyleSheet } from 'react-native'

const typo = StyleSheet.create({
  t32: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 32,
  },
  t24: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
  },
  t20: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.01
  },
  t18: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.01
  },
  t16: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.01
  },
  t14: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.01
  },
  t12: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
  },
})

const color = StyleSheet.create({
  black80: {
    color: "#595959",
  },
  black50: {
    color: "#808080",
  },
  black30: {
    color: "#B2B2B2",
  },
  black10: {
    color: "#f3f3f3",
  },
  blue: {
    color: "#017AFE",
  },
  white: {
    color: "#ffffff",
  }
})

const align = StyleSheet.create({
  center: {
    width: '100%',
    textAlign: 'center'
  },
})

const COLOR = {
  black80: "#595959",
  black50: "#808080",
  black30: "#B2B2B2",
  black10: "#f3f3f3",
  blue: "#017AFE",
  white: "#ffffff"
}


export { typo, color, COLOR, align }
