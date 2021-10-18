import React, { useState, useRef } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {
  Text,
  View,
  Box,
  FormControl,
  Button,
  ScrollView,
  Select,
  CheckIcon,
  Radio,
  Icon,
  Modal,
} from "native-base";
import { AddCustomer, AddProduk } from '../';

export default function PenjualanForm() {
  let [produk, setProduk] = useState("")
  let [customer, setCustomer] = useState("")

  const [addCustomerVisible, setAddCustomerVisible] = useState(false)
  const [addProdukVisible, setAddProdukVisible] = useState(false)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Modal
        isOpen={addProdukVisible}
        onClose={() => setAddProdukVisible(false)}
        size="lg"
        animationPreset="slide"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tambah Produk</Modal.Header>
          <AddProduk />
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={addCustomerVisible}
        onClose={() => setAddCustomerVisible(false)}
        size="lg"
        animationPreset="slide"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tambah Customer</Modal.Header>
          <AddCustomer />
        </Modal.Content>
      </Modal>
      <ScrollView>
        <View
          p="4"
          bg="white"
          roundedBottom="2xl"
          shadow={4}
          mx={30}
          mb={30}
        >
          <FormControl>
            <FormControl.Label _text={{ fontSize: 16 }}>Produk</FormControl.Label>
            <Select
              selectedValue={produk}
              minWidth="90%"
              accessibilityLabel="Choose Service"
              placeholder="Pilih produk"
              _selectedItem={{
                _text: {
                  color: "blue.400"
                },
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setProduk(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Button
                bg="darkBlue.600"
                onPress={() => {
                  setAddProdukVisible(!addProdukVisible)
                }}
              >
                Tambah Produk
              </Button>
            </Select>
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label _text={{ fontSize: 16 }}>Customer</FormControl.Label>
            <Select
              selectedValue={customer}
              minWidth="90%"
              accessibilityLabel="Choose Service"
              placeholder="Pilih customer"
              _selectedItem={{
                _text: {
                  color: "blue.400"
                },
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setCustomer(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Button
                bg="darkBlue.600"
                onPress={() => {
                  setAddCustomerVisible(!addCustomerVisible)
                }}
              >
                Tambah Customer
              </Button>
            </Select>
          </FormControl>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt="2"
          >
            <Text
              fontSize={16}
            >Pembayaran :{" "}</Text>
            <Radio.Group
              size="lg"
              name="exampleGroup"
              accessibilityLabel="pick a choice"
              flexDirection="row"
            >
              <Radio
                _text={{
                  mx: 2,
                }}
                colorScheme="green"
                value="1"
                icon={<Icon as={<MaterialCommunityIcons name="bank" />} />}
                my={1}
              >
                Bank
              </Radio>
              <Radio
                _text={{
                  mx: 2,
                }}
                size="md"
                colorScheme="green"
                value="2"
                icon={<Icon as={<MaterialCommunityIcons name="cash" />} />}
                my={1}
              >
                Tunai
              </Radio>
            </Radio.Group>
          </View>
        </View>
      </ScrollView>
      <Box
        h={60}
        bg="blue.400"
        w="100%"
        position="relative"
      >
        <Button
          bg="darkBlue.600"
          mx={75}
          rounded="full"
          p="3"
          _text={{
            "fontWeight": "bold",
            "fontSize": "md"
          }}
          top={-20}
          shadow={4}
        >
          Simpan Transaksi
        </Button>
      </Box>
    </>
  )
}
