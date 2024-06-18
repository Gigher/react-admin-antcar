import { ArrayField, BooleanField, Datagrid, DateField, ImageField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const AutoShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="brand.name" />
            <TextField source="model.name" />
            <NumberField source="type" />
            <ArrayField source="images">
                <Datagrid>
                    <ImageField source='pathS3' />
                    <TextField source="originalImagePath" />
                    <TextField source="mediumImagePath" />
                    <TextField source="smallImagePath" />
                    <TextField source="orderIndex" />
                    <TextField source="id" />
                </Datagrid>
            </ArrayField>
            <NumberField source="year" />
            <NumberField source="ownersCount" />
            <NumberField source="mileage" />
            <TextField source="dealer" />
            <TextField source="price.currency.name" />
            <TextField source="vin" />
            <TextField source="location.city" />
            <TextField source="manufacturer" />
            <DateField source="firstRegDate" />
            <TextField source="colors" />
            <TextField source="bodyType" />
            <DateField source="fuelType" />
            <DateField source="transmissionType" />
            <TextField source="material" />
            <DateField source="ecoType" />
            <NumberField source="enginePower" />
            <DateField source="driveType" />
            <BooleanField source="isFavorite" />
            <BooleanField source="booked" />
            <BooleanField source="blocked" />
            <NumberField source="literEngineVolume" />
            <BooleanField source="visible" />
            <TextField source="additionalInformation" />
            <DateField source="warranty" />
            <TextField source="baggageVolume" />
            <TextField source="backTires" />
            <TextField source="isClone" />
            <TextField source="frontTires" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);