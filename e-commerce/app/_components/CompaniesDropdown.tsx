import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CompaniedDropdownProps {
    setCompany: (string) => void;
}

export default function CompaniedDropdown({ setCompany }: CompaniedDropdownProps) {
    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"]
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Companies" />
            </SelectTrigger>
            <SelectContent>
                {companies.map(item => <SelectItem onChange={(e: React.FormEvent<HTMLFormElement>) => setCompany(e.target.value || "")} value={item}>{item}</SelectItem>)}
            </SelectContent>
        </Select>
    )
}