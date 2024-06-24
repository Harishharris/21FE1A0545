import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CompaniedDropdownProps {
    setCompany: (string | void);
}

export default function CategoriesDropdown({ setCategory }) {
    const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad"]
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
                {categories.map(item => <SelectItem onChange={(e: any) => setCategory(e.target.value)} value={item}>{item}</SelectItem>)}
            </SelectContent>
        </Select>
    )
}