import type { TAddTournamentError } from "@/app/(admin)/admin/add-tournaments/page"
import { set } from "date-fns";


export const validateAddTournamentForm = (form: TAddTournamentError, setError: React.Dispatch<React.SetStateAction<TAddTournamentError>>) => {

    let isError = false;
    if (!form.map) {
        setError((prev) => ({ ...prev, map: "Map is required" }))
        isError = true;
    };
    if (!form.gameType) {
        setError((prev) => ({ ...prev, gameType: "Game Type is required" }))
        isError = true;
    }
    if (!form.matchDuration) {
        setError((prev) => ({ ...prev, matchDuration: "Match Duration Type is required" }))
        isError = true;
    }
    if (!form.reEntry) {
        setError((prev) => ({ ...prev, reEntry: "Re-Entry is required" }))
        isError = true;
    }
    if (!form.scheduleType) {
        setError((prev) => ({ ...prev, scheduleType: "Schedule Type is required" }))
        isError = true;
    }
    if (!form.startDate) {
        setError((prev) => ({ ...prev, startDate: "Start Date is required" }))
        isError = true;
    }
    if (!form.xpLevel) {
        setError((prev) => ({ ...prev, xpLevel: "XP Level is required" }))
        isError = true;
    }
    if (!form.players) {
        setError((prev) => ({ ...prev, players: "Players is required" }))
        isError = true;
    }
    if (Number(form.players) > 12 || Number(form.players) < 2) {
        setError((prev) => ({ ...prev, players: "Players should be between 2 to 12" }))
        isError = true;
    }
    if (!form.goalTarget) {
        setError((prev) => ({ ...prev, goalTarget: "Goal Target is required" }))
        isError = true;
    }
    if (!form.goalFor) {
        setError((prev) => ({ ...prev, goalFor: "Goal For is required" }))
        isError = true;
    }
    if (!form.bonusAmount) {
        setError((prev) => ({ ...prev, bonusAmount: "Bonus Amount is required" }))
        isError = true;
    }
    if (!form.bonusChain) {
        setError((prev) => ({ ...prev, bonusChain: "Bonus Chain is required" }))
        isError = true;
    }
    if (!form.entryFeeAmount) {
        setError((prev) => ({ ...prev, entryFeeAmount: "Entry Fee Amount is required" }))
        isError = true;
    }
    if (!form.entryFeeCurrency) {
        setError((prev) => ({ ...prev, entryFeeCurrency: "Entry Fee Currency is required" }))
        isError = true;
    }

    return !isError;
}
