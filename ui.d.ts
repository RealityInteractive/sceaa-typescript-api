declare class UI {
    /**Displays an alert dialog with configurable buttons*/
    static alertDialog(parameters: AlertDialogParameters): DialogResult;

    /**Displays an alert dialog with configurable buttons and a list of selectable options*/
    static listDialog(parameters: ListDialogParameters): StringInputDialogResult;

    /**Displays an alert dialog with configurable buttons and an editable text box*/
    static stringDialog(parameters: StringDialogParameters): StringInputDialogResult;

    /**Displays a short-lived message popup that the user cannot interact with*/
    static popup(message: string): void;

    /**Blocks execution until the update UI has focus (In most cases once the Introduction Screen is complete) */
    static waitForFocus(): void;

    static showProgressMessage(key: string, message: ProgressMessage): void;
    static clearAllProgressMessages(): void;
    static clearProgressMessage(key: string);
    static setNumReservedProgressMessages(numberOfMessages: number): void;
}

declare interface AlertDialogParameters {
    /** The title of the AlertDialog shown to the user */
    title: string;
    /** The text of the button indicating positive confirmation (e.g. "Yes")*/
    positive: string;
    /** The text of the message shown to the user*/
    message?: string;
    /** The text of the button indicating neutral confirmation (e.g. "Not Sure", "Skip")*/
    neutral?: string;
    /** The text of the button indicating negative confirmation (e.g. "No")*/
    negative?: string;
}


declare class DialogResult {
    /**The button pressed from a UI Dialog */
    button: DialogButton;
}


/**Parameters for an AlertDialog*/
declare interface AlertDialogParameters {
    /** The title of the AlertDialog shown to the user */
    title: string;
    /** The text of the button indicating positive confirmation (e.g. "Yes")*/
    positive: string;
    /** The text of the message shown to the user*/
    message?: string;
    /** The text of the button indicating neutral confirmation (e.g. "Not Sure", "Skip")*/
    neutral?: string;
    /** The text of the button indicating negative confirmation (e.g. "No")*/
    negative?: string;
}

/**Parameters for a ListDialog*/
declare interface ListDialogParameters {
    /** The title of the ListDialog shown to the user */
    title: string;
    /** The text of the button indicating positive confirmation (e.g. "Yes")*/
    positive: string;
    /** The text of the button indicating neutral confirmation (e.g. "Not Sure", "Skip")*/
    neutral?: string;
    /** The text of the button indicating negative confirmation (e.g. "No")*/
    negative?: string;
    /** The default value selected in the item view*/
    defaultValue?: string;
    /** The list of items the user can select from*/
    items: string[];
    /** The function called to validate the selected value*/
    validation?: ValidationFunction<String>
}

/**Parameters for a StringDialog*/
declare interface StringDialogParameters {
    /** The title of the StringDialog shown to the user */
    title: string;
    /** The text of the button indicating positive confirmation (e.g. "Yes")*/
    positive: string;
    /** The text of the message shown to the user*/
    message?: string;
    /** The text of the button indicating neutral confirmation (e.g. "Not Sure", "Skip")*/
    neutral?: string;
    /** The text of the button indicating negative confirmation (e.g. "No")*/
    negative?: string;
    /** The hint text shown in the editable text field*/
    hint?: string;
    /** The default value shown in the editable text field*/
    defaultValue?: string;
    /** The max number of characters the user can input into the text field */
    maxLength?: number;
    /** The input mode used by the String dialog */
    mode: StringDialogMode;
    /** The function called to validate the entered value*/
    validation?: Function
}


declare interface ProgressMessage {
    title?: string;
    details?: string;
    icon?: ProgressMessageIcon;
    progress?: number;
}
/**The values returned from a StringDialog */
declare class StringInputDialogResult extends DialogResult {
    /**The string returned from the Dialog */
    response: string;
}
declare interface ValidationFunction<T> {
    /** The value being validated. If the value is invalid, return an error message, otherwise don't return a value */
    (value: T): string | void;
}

/** Represents buttons shown on the UI Dialogs*/
declare type ProgressMessageIcon =
    "INVALID" |
    "QUEUED" |
    "IN_PROGRESS" |
    "FAILED" |
    "WARNING" |
    "SUCCESS" |
    "SAFE_TO_REMOVE_USB";

/** The input mode a StringDialog uses*/
declare type StringDialogMode =
    /**The user will only be able to enter integer numbers. 0s at the beginning of the number are preserved*/
    "integerOnly" |
    /**The user will be able to enter any combination of text characters*/
    "alphaNumeric";

declare type DialogButton =
    /** Represents a dialog closed without a keypress*/
    "none" |
    /** Represents the button pressed being for positive confirmation (e.g. "Yes")*/
    "positive" |
    /** Represents the button pressed being for neutral confirmation (e.g. "Skip", "Not Sure")*/
    "neutral" |
    /** Represents the button pressed being for negative confirmation (e.g. "No")*/
    "negative";
