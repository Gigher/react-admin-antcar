import { ArrayInput, BooleanInput, DateInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

export const AutoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <ArrayInput source="images"><SimpleFormIterator><TextInput source="pathS3" />
            <TextInput source="originalImagePath" />
            <TextInput source="mediumImagePath" />
            <TextInput source="smallImagePath" />
            <TextInput source="orderIndex" />
            <TextInput source="id" /></SimpleFormIterator></ArrayInput>
            <NumberInput source="year" />
            <NumberInput source="mileage" />
            <TextInput source="price.currency.name" />
            <TextInput source="location.city" />
            <DateInput source="firstRegDate" />
            <DateInput source="fuelType" />
            <DateInput source="transmissionType" />
            <NumberInput source="enginePower" />
            <DateInput source="driveType" />
            <BooleanInput source="isFavorite" />
            <NumberInput source="literEngineVolume" />
            <BooleanInput source="visible" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);