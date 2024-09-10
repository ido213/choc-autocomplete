import { InputProps, SystemStyleObject } from '@chakra-ui/react';
import { MaybeRenderProp } from '@chakra-ui/react-utils';
import { default as React } from 'react';
import { UseAutoCompleteReturn } from './types';

export interface AutoCompleteInputProps extends Omit<InputProps, "children"> {
    children?: MaybeRenderProp<{
        tags: UseAutoCompleteReturn["tags"];
    }>;
    wrapStyles?: SystemStyleObject;
    hidePlaceholder?: boolean;
    loadingIcon?: React.ReactNode;
}
export declare const AutoCompleteInput: import('@chakra-ui/react').ComponentWithAs<"input", AutoCompleteInputProps>;
//# sourceMappingURL=autocomplete-input.d.ts.map