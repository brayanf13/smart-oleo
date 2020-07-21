import { StyleSheet } from "react-native";

const primaryColor = "#3DE479";
const secundaryColor = "#138A3E";
const white = "#fff";
const gray = "#7c7c7c";
const lightGray = "#c4c4c4";
const backgroundColor = "#F6FCF3";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FCF3",
  },
  servicesListContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  serviceContainer: {
    margin: 8,
    padding: 32,
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  scrollView: {
    paddingHorizontal: 64,
  },
  scrollViewModal: {
    paddingHorizontal: 24,
  },
  crossBar: {
    marginTop: 16,
    marginBottom: 16,
    height: 2,
    backgroundColor: "#7C7C7C",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textSubtitle: {
    fontSize: 14,
    color: "#7C7C7C",
  },
  textDescription: {
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: gray,
  },
  inputLabelText: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputLabelSubtitle: {
    fontSize: 10,
    color: gray,
    marginBottom: 8,
  },
  inputTextArea: {
    textAlignVertical: "top",
  },
  inputText: {
    textAlignVertical: "center",
    borderWidth: 1,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
    borderRadius: 8,
    borderColor: "#c4c4c4",
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: primaryColor,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  primaryButtonText: {
    color: white,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: white,
    borderRadius: 8,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    borderColor: primaryColor,
    borderBottomWidth: 2,
    borderStyle: "solid",
    shadowColor: secundaryColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.7,
    elevation: 14
  },
  secondaryButtonModal: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: white,
    borderRadius: 8,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginTop: 28,
    marginBottom: 8,
    borderColor: primaryColor,
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 14
  },
  secondaryButtonText: {
    color: secundaryColor,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  secondaryButtonTextModal: {
    color: secundaryColor,
    fontSize: 11,
    letterSpacing: 1,
    fontWeight: "bold",
    marginRight: 6
  },
  // crossBar: {
  //   marginTop: 32,
  //   marginBottom: 16,
  //   height: 1,
  //   backgroundColor: "#c4c4c4",
  // },
  MessageError: {
    fontSize: 12,
    color: "#ff0000",
  },
});
