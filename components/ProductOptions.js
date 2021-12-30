

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
    return (
        <fieldset className="mt-3">
            <legend className="text-xl font-semibold">{name}</legend>

            <div className="inline-flex items-center flex-wrap">
                {
                    values.map(value => {
                        const id = `option-${name}-${value}`
                        const checked = selectedOptions[name] === value

                        return (
                            <label key={id} htmlFor={id}>
                                <input 
                                    className="sr-only"
                                    type="radio"
                                    id={id}
                                    name={`option-${name}`}
                                    value={value}
                                    checked={checked} 
                                    onChange={() => { setOptions(name, value) }}
                                />

                                {/* Color Swatches */}
                                <div 
                                    className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 
                                            ${ checked 
                                                ? "text-white bg-gray-900" 
                                                : "text-gray-900 bg-gray-200"
                                            }`}
                                >

                                    {name.includes("Color") ?
                                    <div className="rounded-full h-6 w-6"
                                        style={{backgroundColor: value}}
                                    >
                                        <span className="sr-only">
                                            {value}
                                        </span>
                                    </div>
                                    :
                                    <span className="px-2">{value}</span>
                                   } 
                                </div>
                            </label>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

//line 21 not sure why 2nd brackets {} are around the { setOptions(name,value) }