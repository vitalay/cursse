import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from "./constants";


export function isPageValid(page) {
      return Object.keys(NAV_ITEMS).includes(page)
}

export function validateTimelineItems(timelineItems) {
            return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
    return (
			typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
		)

}

export function validatorSelectedOptions(options) {
      return options.every(isSelectedOptionValid)
    }

function isSelectedOptionValid({ value, label }) {
      return typeof value === 'number' && typeof label === 'string'
    }
