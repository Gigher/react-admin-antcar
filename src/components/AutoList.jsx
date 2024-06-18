import { ArrayField, BooleanField, ChipField, Datagrid, DateField, ImageField, List, NumberField, SingleFieldList, TextField } from 'react-admin';

export const AutoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <ArrayField source="images">
                {/* {images.map((img) => {
                    return <ImageField source={img} key={img} />
                })} */}
                <ImageField source='images[0].pathS3' />
            </ArrayField>
            <NumberField source="year" />
            <NumberField source="mileage" />
            <TextField source="price.currency.name" />
            <TextField source="location.city" />
            <DateField source="firstRegDate" />
            <NumberField source="fuelType" />
            <NumberField source="transmissionType" />
            <NumberField source="enginePower" />
            <NumberField source="driveType" />
            <BooleanField source="isFavorite" />
            <NumberField source="literEngineVolume" />
            <BooleanField source="visible" />
            <TextField source="id" />
        </Datagrid>
    </List>
);