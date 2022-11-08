<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LaptimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'Pilote' => $this->Pilote,
            'Circuit' => $this->Circuit,
            'Voiture' => $this->Voiture,
            'Temps' => $this->Temps,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
