<template>
    <v-row class="fill-height" style="margin-top: 10px">
        <v-spacer></v-spacer>
        <v-col cols="8">
            <v-data-table
                    :items="items"
                    :headers="headers"
                    hide-default-footer
            >
                <template v-slot:item.buttons="{item}">
                    <v-btn

                            icon
                            color="green"
                            @click="processAction(item)">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </template>

                <template v-slot:item.status={item}>

                    <v-chip outlined
                            :color="getModeColor(item.status)"
                    >
                        {{ item.status }}
                    </v-chip>
                </template>

                <template v-slot:item.brack={item}>

                    <v-chip outlined
                            :color="getBrackColor(item.brack)"
                    >
                        {{ item.brack }}%
                    </v-chip>
                </template>
            </v-data-table>

            <div class="text-center mt-10 mb-4">
                <v-pagination
                        v-model="page"
                        :length="3"
                        color="black"
                ></v-pagination>
            </div>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>


export default {
    name: "Claims",

    data: () => ({

        page: 1,
        headers: [
            {text: "№ вагона", value: 'number'},
            {text: "Зона", value: 'zone'},
            {text: "Статус", value: 'status'},
            {text: "Средний процент брака", value: 'brack', align: 'center'},
            {text: "Действия", value: 'buttons'},
        ],

        items: [
            {
                number: 43629840,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f4',
                zone: 'A',
                status: 'В ожидании',
                brack: '18',
            },
            {
                number: 44738495,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
                zone: 'C',
                status: 'В ожидании',
                brack: '15',
            },
            {
                number: 70049039,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581d1',
                zone: 'B',
                status: 'Оформлен',
                brack: '23',
            },
            {
                number: 54910398,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f582f2',
                zone: 'B',
                status: 'Оформлен',
                brack: '15',
            },
            {
                number: 55070010,
                id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f583f3',
                zone: 'C',
                status: 'Оформлен',
                brack: '19',
            },
        ]
    }),

    methods: {
        getModeColor(mode) {
            switch (mode) {
                case 'В ожидании':
                    return 'red';
                case 'Оформлен':
                    return 'grey';
            }
        },

        getBrackColor(brack) {
            if (Number(brack)>=15)
                return 'red';
            return '';
        },

        processAction(item) {
            if (item.status === "Оформлен") {
                this.$router.push({name: 'ClaimInfo', params: {id: item.id}})
            } else {
                this.$router.push({name: 'VagonInfo', params: {id: item.id}})
            }
        }
    }

}
</script>

<style scoped>

</style>
