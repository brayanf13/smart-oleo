import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    textTitle: {
        marginTop: 64,
        textAlign: "center",
    },
    textTitleAddress: {
        marginBottom: 32,
        textAlign: "center",
    },
    textSubtitle: {
        marginTop: 8,
        marginBottom: 32,
        textAlign: "center",
    },

    crossBar: {
        marginTop: 32,
        marginBottom: 16,
        height: 1,
        backgroundColor: "#c4c4c4",
    },

    primaryButton: {
        marginTop: 32,
    },

    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    checkBoxText: {
        fontSize: 12,
    },

    checkBoxTermo: {
        fontSize: 12,
        color: '#00f'
    },













    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    containerModal: {
        backgroundColor: "#fff",
        padding: 32,
    },
    modal: {
        marginVertical: 150,
        marginHorizontal: 32,
        backgroundColor: "#fff",
        shadowColor: "#000",
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonCloseModal: {
        position: "absolute",
        right: 10,
        top: 10,
    },

    textTitleModal: {
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 32,
        color: '#17AA4D',
    },

    textDescription: {
        marginBottom: 56,
    },








       
         
      mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
      },
    
      map: {
        width: '100%',
        height: 350,
      },
    
      mapMarker: {
        width: 90,
        height: 80, 
      },
    
      mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
      },
    
      mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
      },
    
      mapMarkerTitle: {
        flex: 1,
        fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23,
      },
});
