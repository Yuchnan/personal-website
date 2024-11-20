import React from 'react'
import DefaultLayout from "@layouts/DefaultLayouts"
import EachUtils from '@/utils/EachUtils';

import { useAtom } from 'jotai';
import { modeAtom } from '@/jotai/atoms';
import { LIST_STYLE_DAY, LIST_STYLE_NIGHT } from '@/constants/listStyle';

function Landing() {
    const [mode] = useAtom(modeAtom);

    return (
        <>
            <EachUtils
                of={mode === "day" ? LIST_STYLE_DAY : LIST_STYLE_NIGHT}
                render={({ style }) => (
                    <div className={`w-screen h-screen ${style}`}>
                        <DefaultLayout>
                        </DefaultLayout>
                    </div>
                )}
            />
        </>
    )
}

export default Landing