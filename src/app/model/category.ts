export interface Category {
    fk_parent: number;
    label: string;
    description?: string;
    color?: string;
    visible?: number;
    type?: number;
    childs?: any[];
    id: number;
    entity?: number;
    validateFieldsErrors?: any[];
    import_key?: null;
    array_options?: any[];
    array_languages?: null;
    contacts_ids?: null;
    linked_objects?: null;
    linkedObjectsIds?: null;
    linkedObjectsFullLoaded?: any[];
    fk_projet?: null;
    origin?: null;
    origin_id?: null;
    ref?: null;
    ref_ext?: string;
    status?: null;
    state_id?: null;
    region_id?: null;
    demand_reason_id?: null;
    transport_mode_id?: null;
    model_pdf?: null;
    last_main_doc?: null;
    fk_bank?: null;
    note_public?: null;
    note_private?: null;
    date_creation?: number;
    date_validation?: null;
    date_modification?: number;
    date_cloture?: null;
    user_author?: null;
    user_creation?: number;
    user_creation_id?: number;
    user_valid?: null;
    user_validation?: null;
    user_validation_id?: null;
    user_closing_id?: null;
    user_modification?: number;
    user_modification_id?: number;
    specimen?: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCategory(json: string): Category {
        return JSON.parse(json);
    }

    public static categoryToJson(value: Category): string {
        return JSON.stringify(value);
    }
}