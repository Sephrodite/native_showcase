import { View, Text, FlatList, StyleSheet, ScrollView, TextInput, Pressable, Modal, Button } from "react-native";
import { useState, useEffect } from "react";
import React from "react";

import { events, Event } from '../Mock-database/events'




export default function EventSchedule() {
    const [schedule, setSchedule] = useState<Event[]>([]);
    const [filters, setFilters] = useState("")
    const [filteredShed, setFilteredSched] = useState(schedule)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState<Event | null>(null);

    useEffect(() => {
        setSchedule(events);
    }, []);


    const filteredEvents = schedule.filter((event) =>
        event.title.toLowerCase().includes(filters.toLowerCase())
    );

    const openModal = (event: Event) => {
        setModalData(event);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalData(null);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Schedule</Text>
            <TextInput style={{ height: 40, padding: 5 }}
                placeholder="Search events on title"
                onChangeText={setFilters}
                value={filters}
            />
            <FlatList
                data={filteredEvents}  // Your array of data
                keyExtractor={(item) => item.id}  // Unique identifier per item
                renderItem={({ item }) => (
                    <>
                        <ScrollView style={styles.eventCard}>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                            <Text>{item.speaker}</Text>
                            <Text>{item.time}</Text>
                            <Text>{item.location}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => { openModal(item) }}>
                                <Text style={styles.textStyle}>More Information</Text>
                            </Pressable>
                        </ScrollView>

                    </>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}>
                {modalData &&
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{modalData.description}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>}
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    eventCard: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});